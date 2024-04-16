const { app } = require('@azure/functions');

app.http('HelloWorldFn', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world';

        return { body: `Hello, ${name}!`, date: "16/04/2024" };
    }
});
