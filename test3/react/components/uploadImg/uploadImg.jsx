import React,{Component} from 'react'

class UploadImg extends Component{
  constructor(props){
    super(props);
    this.state = {
      imgUrl:'',
      imgShow:false
    }
  }

  render(){
    let {imgUrl,imgShow} = this.state;
    return(
      <div className="uploadFeild">
        <input style={{display:'none'}} type="file" ref="upIpt" onChange={()=>{
          let files = this.refs.upIpt.files;
          if(files.length){
            this.doUpload(files[0],()=>{this.refs.upIpt.value=null})
          }
        }}/>
        <div className="operate_field" onClick={()=>{this.refs.upIpt.click()}}>
          <div className={`uploaded_field ${imgShow?'active':''}`}>
            <img src={imgUrl} />
            <div className="operate_mask">点击重新上传</div>
          </div>
        </div>
      </div>
    )
  }

  doUpload(file,cb){
    let oReader = new FileReader();
    let _this = this;
    oReader.onload = function(e){
      _this.setState({
        imgUrl:e.target.result,
        imgShow:true
      },()=>{
        cb();
      })
    }
    oReader.readAsDataURL(file);
  }
}

export default UploadImg;