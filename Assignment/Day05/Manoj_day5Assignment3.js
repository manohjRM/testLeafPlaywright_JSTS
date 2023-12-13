"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var Post = /** @class */ (function () {
    function Post() {
    }
    Post.prototype.sharePost = function () {
        console.log("The post shared successfully");
    };
    Post.prototype.render = function () {
        console.log("The post rendered successfully");
    };
    Post.prototype.handleEvent = function () {
        console.log("The event for the post handled successfully");
    };
    return Post;
}());
var Comment = /** @class */ (function () {
    function Comment() {
    }
    Comment.prototype.sharePost = function () {
        console.log("The post got the comment successfully");
    };
    Comment.prototype.render = function () {
        console.log("The comment rendered successfully for the post");
    };
    Comment.prototype.handleEvent = function () {
        console.log("The event for the comment handled successfully");
    };
    return Comment;
}());
var Like = /** @class */ (function () {
    function Like() {
    }
    Like.prototype.sharePost = function () {
        console.log("The post got the like successfully");
    };
    Like.prototype.render = function () {
        console.log("The like rendered successfully for the post");
    };
    Like.prototype.handleEvent = function () {
        console.log("The event for the like handled successfully");
    };
    return Like;
}());
var post = new Post();
post.handleEvent();
post.render();
post.sharePost();
var like = new Like();
like.handleEvent();
like.render();
like.sharePost();
var comment = new Comment();
like.handleEvent();
like.render();
like.sharePost();
