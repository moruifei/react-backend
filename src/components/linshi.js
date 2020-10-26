import React, { Component, useState } from 'react';
import { Checkbox, Input, Row, Col, Icon, Button } from 'antd';
import _ from 'lodash';
const CheckGroup = Checkbox.Group;
const initialData = [
    {
        name: '门店管理',
        id: 11
    },
    {
        name: '人员管理',
        id: 12
    },
    {
        name: '商铺管理',
        id: 13
    },
    {
        name: '商品管理',
        id: 14
    },
    {
        name: '价格管理',
        id: 15
    },
]

const GoodsManage = (props) => {
    const [data, setData] = useState(initialData);
    const [selectData, setSelectData] = useState([]);
    const [selectIdx, setSelectIdx] = useState([]);
    const handleChange = (e) => { // 选择
        const selected = new Set(e);
        const selectedData = data.filter(it => selected.has(it.id));
        setSelectData(selectedData);
        setSelectIdx(e);
    }
    const handleSelectAll = () => { // 全选
        // if (e.target.checked) {
            setSelectData(data);
            setSelectIdx(data.map(it => it.id));
        // } else {
        //     setSelectData([]);
        //     setSelectIdx([]);
        // }
    }
    const handleReverse = (e) => { // 反选
        const selectedData = data.filter(it => !selectIdx.includes(it.id));
        setSelectData(selectedData);
        setSelectIdx(selectedData.map(it => it.id))
    }
    const handleDelete=(id)=>{ //删除
        console.log(id)
        setSelectData(selectData.filter(it=>it.id!==id));
        setSelectIdx(selectIdx.filter(it=>it!==id));
    }
    const handleClear=()=>{ // 清空
        setSelectIdx([]);
        setSelectData([]);
    }
    // setTimeout(()=>{console.log(selectData, selectIdx,'==')},1000) //测试数据正确性
    const handleSearch=(value)=>{
        console.log(value, '-')
        console.log(data, '00')
        setData(initialData.filter(it=>it.name.includes(value)));
    }
    return (<div>
        <Row>
            <Col span={12}>
                <Col style={{ paddingRight: '10px' }} span={12}>
                    <Input
                        placeholder="搜索"
                        // value={value}
                        onInput={(e) => handleSearch(e.target.value) }
                        suffix={<Icon type="search" />}
                    />
                    <div>
                        <div style={{ marginTop: '10px' }}>
                            <Button type="primary" onClick={handleSelectAll}>全选</Button>
                            <Button style={{marginLeft: '20px'}} type="primary" onClick={handleReverse}>反选</Button>
                        </div>
                        <CheckGroup value={selectIdx} onChange={handleChange}>
                            {data.map((it, idx) => {
                                return <Col key={it.id} style={{ margin: '5px 0' }} span={24}>
                                    <Checkbox value={it.id}>{it.name}</Checkbox>
                                </Col>
                            })}
                        </CheckGroup>
                    </div>
                </Col>
                <Col style={{ paddingLeft: '10px', borderLeft: '2px solid grey' }} span={12}>
                    <h4>已选: {selectData.length}<span onClick={handleClear} style={{ float: 'right', cursor: 'pointer' }}>清空</span></h4>
                    <div>
                        {selectData.length > 0 && selectData.map((it, idx) => {
                            return <div style={{ marginTop: '20px' }} key={it.id}><Icon onClick={()=>handleDelete(it.id)} style={{cursor:'pointer'}} type="close" /><span style={{ marginLeft: '20px' }}>{it.name}</span></div>
                        })}
                    </div>
                </Col>
            </Col>
        </Row>
    </div>)
}
export default GoodsManage;