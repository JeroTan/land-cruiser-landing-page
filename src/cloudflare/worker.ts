import { handle } from "@astrojs/cloudflare/handler";

// For modularity, export all from your durable objects here
// e.g. export * from "./durable-objects/ExampleDurableObject";

export default {
    async fetch(request: Request, env: Env, ctx: ExecutionContext) {
        return handle(request, env, ctx);
    },
    async queue(batch: MessageBatch<any>, _env: Env) {
        let messages = JSON.stringify(batch.messages);
        console.log(`consumed from our queue: ${messages}`);
    },
    async scheduled(_controller: ScheduledController, _env: Env, _ctx: ExecutionContext){
        // Do some time logic here
    },
} satisfies ExportedHandler<Env>;
