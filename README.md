## PandaTalk

To run, make sure you have MongoDB installed (no special auth necessary), then do the following:

1. To install all dependencies, `yarn`
2. To start the client, `yarn start`
3. To start the server, in a second terminal window, `yarn run server`

#### Design decisions

* I decided against using any sort of third-party state management library (Redux, for example) for the simple fact that the state is not complex enough to warrant another dependency. The data is a simple object that sits in the Root container of the application.
* Components are organized by feature rather than a 'flat' components folder. I think this makes more sense in the long run and allows separating the logic into feature-based development. So, for example - CommentsList contains within it the Comment component which can be easily imported along with the CommentsList or by itself.
* All async work is done via HOC's which simply use the `fetch` API of the browser. Again, there was no reason to introduce any further dependencies for the simple AJAX requests being done. This also allows to easily implement a different AJAX or state-management mechanism without affecting any of the components.
* I kept the server very, very simple to save on time. Otherwise, I would have added validation middlewares for the POST, and a middleware to handle sending requests so that endpoints would be simple business-logic function.
