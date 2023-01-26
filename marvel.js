const sql =require("./db.js");

class Marvel{
    constructor(body){
        this.name=body.sort_name;
        this.Date=body.sort_date;
        this.search_name=body.search_name;
        this.search_date=body.search_date;
        this.filter_tag=body.filter_tag;
    }

    static ReadData(){
      let Query="SELECT * FROM MARVEL";
      sql.query(Query,(err,data)=>{
        if(err){ result(err,null); return;}
        else { result(null, data); return;}
      })
    }

    static SortData(){

        let Query="SELECT * FROM MARVEL WHERE ORDER BY ";
        if(this.name==1) Query+=" NAME DESC, ";
        else if(this.name==0) Query+=" NAME ASC, "
        if(this.Date==1) Query+= " DATE DESC;";
        else if(this.Date==0) Query+=" DATE ASC;";
        sql.query(Query,(err,data)=>{
            if(err){ result(err,null); return;}
            else { result(null, data); return;}
          });
        
    }

    static Search(){
        let Query="SELECT * FROM MARVEL WHERE ";
        if(this.search_name) Query+= ` AND NAME= ${this.search_name}`;
        if(this.search_date) Query+= ` AND MDATE= ${this.search_date}`;
        Query+=";";

        sql.query(Query,(err,data)=>{
            if(err){ result(err,null); return;}
            else { result(null, data); return;}
          });
    }

    static Insert(){
        let Query=`INSERT INTO MARVEL (NAME, MDATE, TAGS, URL) VALUES (${this.name},${this.date},${this.tags},${this.url});`;

        sql.query(Query,(err,data)=>{
            if(err){ result(err,null); return;}
            else { result(null, data); return;}
          });
    }
    

}


module.exports = Marvel;