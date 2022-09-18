"use strict"; //エラーチェックをする際にはエラーが発見しやすくなる

{
  class Post{
    constructor(text){
      this.text = text;
      this.likeCount = 0;
    }
    show(){
      console.log(`${this.text}-${this.likeCount}likes`);
    } 
    like(){
      this.likeCount++;
      this.show();
    }
    static showInfo(){
      console.log("Post class version 1.0");
    }
  
  }


  const posts =[
    new Post("Javascriptの勉強中.."),
    new Post("プログラミング楽しい!"),
  ];

  Post.showInfo();

}

