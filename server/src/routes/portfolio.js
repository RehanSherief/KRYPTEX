import {Router} from 'express';
import Investment from '../models/Investment.js';
import Transaction from '../models/Transaction.js';
const router=Router();
router.get('/summary',async(req,res)=>{try{const [investments,transactions]=await Promise.all([Investment.find({user:req.user}).sort({createdAt:-1}),Transaction.find({user:req.user}).sort({date:-1}).limit(8)]);const invested=investments.reduce((s,x)=>s+x.investedAmount,0);const value=investments.reduce((s,x)=>s+x.currentValue,0);const gain=value-invested;res.json({investments,transactions,summary:{invested,value,gain,returnPct:invested?gain/invested*100:0,count:investments.length}});}catch{res.status(500).json({message:'Could not load portfolio'});}});
router.post('/investments',async(req,res)=>{try{const {name,symbol,type,investedAmount,currentValue,units}=req.body;if(!name||!Number.isFinite(+investedAmount)||!Number.isFinite(+currentValue)||+investedAmount<0||+currentValue<0)return res.status(400).json({message:'Enter a name and valid amounts'});const item=await Investment.create({user:req.user,name,symbol,type,investedAmount:+investedAmount,currentValue:+currentValue,units:+units||0});await Transaction.create({user:req.user,title:`Added ${name}`,category:type||'Investment',amount:+investedAmount,kind:'Buy'});res.status(201).json(item);}catch{res.status(500).json({message:'Could not add investment'});}});
router.delete('/investments/:id',async(req,res)=>{const item=await Investment.findOneAndDelete({_id:req.params.id,user:req.user});if(!item)return res.status(404).json({message:'Investment not found'});res.json({message:'Investment deleted'});});
router.get('/transactions',async(req,res)=>{const items=await Transaction.find({user:req.user}).sort({date:-1});res.json(items);});
export default router;
