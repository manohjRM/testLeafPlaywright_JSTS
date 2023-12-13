/*
Assignment 3: Social Media Platform Features (TypeScript)
 
Objective:
Practice using interfaces with multiple implementation
 
Instructions:
1. create an interface `SocialMediaFeature` with a method `sharePost()`.
2. Export the both SocialMediaFeature and UIComponent (From Assignment2)
2. Create `Post`, `Comment`, and `Like` classes and implement the `SocialMediaFeature` interface 
   and UIcomponent
4. Create instances of `Post`, `Comment`, and `Like` and Call the methods to render, handle events, 
   and share posts in a social media platform application.
*/

import { UIComponent } from "./Manoj_day5Assignment2";

interface SocialMediaFeature extends UIComponent{
    sharePost():void;
}

class Post implements SocialMediaFeature{
    sharePost(): void {
        console.log(`The post shared successfully`);

    }
    render(): void {
        console.log(`The post rendered successfully`);
        
    }
    handleEvent(): void {
        console.log(`The event for the post handled successfully`);

    }

}

class Comment implements SocialMediaFeature{
    sharePost(): void {
        console.log(`The post got the comment successfully`);
    }
    render(): void {
        console.log(`The comment rendered successfully for the post`);
    }
    handleEvent(): void {
        console.log(`The event for the comment handled successfully`);
    }

}

class Like implements SocialMediaFeature{
    sharePost(): void {
        console.log(`The post got the like successfully`);
    }
    render(): void {
        console.log(`The like rendered successfully for the post`);
    }
    handleEvent(): void {
        console.log(`The event for the like handled successfully`);
    }

}

const post = new Post();
post.handleEvent();
post.render();
post.sharePost();

const like = new Like();
like.handleEvent();
like.render();
like.sharePost();

const comment = new Comment();
like.handleEvent();
like.render();
like.sharePost();

export {SocialMediaFeature}