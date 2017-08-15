import React,{Component,PropTypes} from 'react'
import Calendar from '../components/Calendar/Calendar'
import '../style/index.css'
import Button from '../components/noState'
import Tab from '../components/Tab'
import Select from '../components/select'
import UploadImg from '../components/uploadImg'
import Slider from '../components/slider'
import Modal from '../components/modal'

class CompTest extends Component{
  constructor(props){
    super(props);
    this.state = {
      visible:false
    }
  }
  render(){
    return(
      <div className="normBlock">
        <h3>组件测试</h3>
        <div className="testBlock">
          <h4 className="block_title">无状态组件</h4>
          <Button />
        </div>

        <div className="testBlock">
          <h4 className="block_title">tab组件</h4>
          <Tab activeIndex={0} className="myTab" onChange={(data)=>{CompTest.tabChange(data)}}>
            <Tab.Panel tab="text1" order="0" >第一个tab</Tab.Panel>
            <Tab.Panel tab="text2" order="1" >第二个tab</Tab.Panel>
            <Tab.Panel tab="text3" order="2" disabled>第三个tab</Tab.Panel>
          </Tab>
        </div>

        <div className="testBlock">
          <h4 className="block_title">下拉菜单组件</h4>
          <Select defaultValue="guangzhou">
            <option value="beijing">北京</option>
            <option value="shanghai">上海</option>
            <option value="guangzhou">广州</option>
          </Select>
        </div>

        <div className="testBlock">
          <h4 className="block_title">图片上传加预览组件</h4>
          <UploadImg />
        </div>

        <div className="testBlock">
          <h4 className="block_title">滑块组件</h4>
          <Slider min={2} max={100} defaultValue={10} styleWidth={500} onChange={(data)=>console.log(data)}/>

        </div>

        <div className="testBlock">
          <h4 className="block_title">模态框</h4>
          <button className="btn btn-default" onClick={()=>this.setState({visible:true})}>模态框测试</button>
        </div>

        <div className="testBlock">
          <h4 className="block_title">日历组件</h4>
          <Calendar />
        </div>
        <Modal visible={this.state.visible} onMaskClick={()=>{this.setState({visible:false})}}/>
      </div>
    )
  }
  static tabChange({activeIndex,prevIndex}){
    console.log(`tab is change from ${prevIndex} to ${activeIndex}`)
  }
}

export default CompTest;