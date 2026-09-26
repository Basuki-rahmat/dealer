import type {FastifyInstance} from "fastify";
import {askAI} from "@dealer/ai";
export async function registerRoutes(app:FastifyInstance){
  app.post("/api/ai/chat",async(req)=>{const body=req.body as {prompt?:string};return askAI({prompt:body.prompt||""});});
  app.post("/api/leads",async(req,reply)=>{try{const b=req.body as any;return await (app as any).prisma?.lead.create({data:b});}catch{return reply.code(501).send({error:"Use database route implementation after app wiring."});}});
}