import Fastify from "fastify";
import cors from "@fastify/cors";
import { prisma } from "@dealer/database";

const app=Fastify({logger:true});
app.register(cors,{origin:true});
app.get("/health",async()=>({ok:true,service:"dealer-api",time:new Date().toISOString()}));
app.get("/api/vehicles",async()=>prisma.vehicle.findMany({orderBy:{createdAt:"desc"}}));
app.get("/api/leads",async()=>prisma.lead.findMany({orderBy:{createdAt:"desc"}}));
app.listen({port:Number(process.env.PORT||4000),host:"0.0.0.0"}).catch(err=>{app.log.error(err);process.exit(1);});
