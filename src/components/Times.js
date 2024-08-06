import React, { Component } from 'react';
import {styled} from 'styled-components'
import { FaCloudSun } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { MdTsunami } from "react-icons/md";
import { LuSunrise } from "react-icons/lu";
import { GiSunCloud } from "react-icons/gi";
export default class Times extends Component {
  render() {
 const {times}=this.props
    return (
      <TimeContainer>
<div className='tong'>
<IoPartlySunnyOutline style={{fontSize:'30px'}} />
  <p>Tong saharlik</p>
  <p>{times.tong_saharlik}</p>
</div>
<div className='quyosh'>
<IoSunny  style={{fontSize:'30px'}}/>
<p>Quyosh</p>
<p>{times.quyosh}</p>
</div>
<div className='peshin'>
<LuSunrise style={{fontSize:'30px'}}/>
<p>Peshin</p>
<p>{times.peshin}</p>
</div>
<div className='asr'>
<MdTsunami style={{fontSize:'30px'}}/>
<p>Asr</p>
<p>{times.asr}</p>

</div>
<div className='shom'>
<FaCloudSun style={{fontSize:'30px'}}/>
<p>Shom Iftor</p>
<p>{times.shom_iftor}</p>
</div>
<div className='hufton'>
<GiSunCloud style={{fontSize:'30px'}} />
<p>Hufton</p>
<p>{times.hufton}</p>
</div>
      </TimeContainer>
    );
  }
}
const TimeContainer=styled.div`
  margin-top:40px;
  display: flex;
  gap: 10px;
  div{
    margin-top:100px;
    background-color: #cdf3fadc;
    border:5px solid green;
    color:darkblue;
    border-radius: 15px;
    margin-left:50px;
    width: 140px;
    text-align:center;
    height:190px;
p{
  margin-top:40px;
  font-size:19px;
}

  }
`