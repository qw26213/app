### 堆和栈
堆和栈在数据结构中是两种不同的数据结构。 两者都是数据项按序排列的数据结构。
栈：像是装数据的桶或者箱子
栈是大家比较熟悉的一种数据结构，它是一种具有后进先出的数据结构，也就是说后存放的先取，先存放的后取，这就类似于我们要在取放在箱子底部的东西（放进去比较早的物体），我们首先要移开压在它上面的物体（放入比较晚的物体）。
堆：像是一颗倒立的大树
堆是一种经过排序的树形数据结构，每个节点都有一个值。通常我们所说的堆的数据结构是指二叉树。堆的特点是根节点的值最小（或最大），且根节点的两个树也是一个堆。由于堆的这个特性，常用来实现优先队列，堆的存取是随意的，这就如同我们在图书馆的书架上取书，虽然书的摆放是有顺序的，但是我们想取任意一本时不必像栈一样，先取出前面所有的书，书架这种机制不同于箱子，我们可以直接取出我们想要的书。
堆中的每一个节点值都大于等于（或小于等于）子树中所有节点的值。或者说，任意一个节点的值都大于等于（或小于等于）所有子节点的值。

微软拼音添加“小鹤双拼”。

reg add HKCU\Software\Microsoft\InputMethod\Settings\CHS /v UserDefinedDoublePinyinScheme0 /t REG_SZ /d "小鹤双拼*2*^*iuvdjhcwfg^xmlnpbksqszxkrltvyovt" /f



回车，就搞定了


安装：
npm install el-tree-transfer --save 或者 npm i el-tree-transfer -S

使用：
<template>
    <div id="createRole">
        <el-form :model="formData" ref="elForm" :rules="rules" label-position="top" class="custom-form">
                    <tree-transfer 
                        v-model="formData.menuIds"
                        :title="['未选', '已选']"                 
                        :from_data="leftTreeData"        
                        :to_data="rightTreeData"  
                        pid="menuId"    
                        node_key="id"    
                        placeholder="请输入关键字"   
                        :defaultProps="props" 
                        @add-btn="addMenu"           
                        @remove-btn="removeMenu"           
                        mode="transfer"                
                        height="500px"             
                        filter                     
                        openAll
                        ref="treeTransfer">                 
                    </tree-transfer>
                </el-form-item>
            </el-col>
        </el-form>
    </div>
</template>
<script>
import treeTransfer from 'el-tree-transfer';import {role,menu} from '@api/systemUrl.js
export default {
    name: 'createRole',　　 props:['id'],
    components: {
        treeTransfer
    },
　　data () { 　　　　return {
    　　　　formData:{},
    　　　　props:{
            　　label: 'name',
            　　children: 'child',
     　 　　},
       　　leftTreeData: [],//左侧tree数据
       　　rightTreeData:[],//右侧tree数据　　　　}
　　},　　mounted(){　　　　this.getLeftMenuTree();　　},
　　methods:{　　　　/**

         * 获取数据
         */
        getData () {
            this.axios.get(role.queryById+this.id).then((res) => {
                if (res && res.data.data) {
                    this.formData = res.data.data;
                    let menuids = this.formData.menuList.map(item => item.id);
                    console.log('menuIds',menuids)
                    this.$set(this.formData,'menuIds',this.formData.menuList.map(item => item.id))
                }
                if (this.formData.menuList && this.formData.menuList.length) {
                    this.$set(this.formData, 'menuIds', this.formData.menuList.map(item => item.id));
                    this.getRoleMenuTree();
                    let rightMenuList = JSON.parse(JSON.stringify(this.formData.menuList))
                        let rightIds = this.getRightDataIds(rightMenuList, []);
                        let leftTreeData = this.filterLeftData(this.leftTreeData, rightIds, []);
                        this.$set(this, 'leftTreeData', leftTreeData);
                }
            })
        },

 

　　　　　/**
         * 添加
         * @param {*} fromData
         * @param {*} toData
         * @param {*} obj
         * 树形穿梭框模式transfer时，返回参数为左侧树移动后数据、右侧树移动后数据、移动的{keys,nodes,halfKeys,halfNodes}对象
         * 通讯录模式addressList时，返回参数为右侧收件人列表、右侧抄送人列表、右侧密送人列表
         */

        addMenu (fromData, toData, obj) { 
            this.formData.menuIds && this.formData.menuIds.length ? this.formData.menuIds : [];
            let menuIds= JSON.parse(JSON.stringify(this.formData.menuIds));　　　　　　　let keys = this.getAllIds(toData,[]);
            menuIds.push(...keys);
            this.$set(this.formData, 'menuIds', keys);
            this.$refs.elForm.validateField('menuIds');
        },

　　　　　/**
         * 获取勾选节点的父节点
         */
        getAllIds (data, ids) {
            data.forEach((item) => {
                ids.push(item.id);
                if (item.child && item.child.length) {
                    this.getAllIds(item.child, ids);
                }
            })
            return ids;
        },

　　　　　/**
         * 移除
         * @param {*} fromData 
         * @param {*} toData 
         * @param {*} obj 
         */
        removeMenu (fromData,toData,obj) { 
            this.formData.menuIds = this.formData.menuIds || [];
            let menuIds= JSON.parse(JSON.stringify(this.formData.menuIds));　　　　　　　let keys = this.getAllIds(toData,[]);
            keys.map((item) => {
                let index = menuIds.indexOf(item);
                if (index > -1) {
                    menuIds.splice(index, 1);
                }
             })
            this.$set(this.formData, 'menuIds', menuIds);
            this.$refs.elForm.validateField('menuIds');
        },  　　　　

　　　　　/**
         * 获取菜单树
         */
        getLeftMenuTree () {
            this.axios.get(menu.menuTree).then((res) => {
                if (res && res.data.data) {
　　　　　　　　　　　　//这个赋值代码非常重要，没有这段，左右移动数据时，不生效
　　　　　　　　　　　　res.data.data.forEach(()>{
　　　　　　　　　　　　　　item.menuId = 0;
　　　　　　　　　　　　})
                    this.leftTreeData = res.data.data;
                }
            })
        },

        /**
         * 获取当前角色下的菜单树
         */
         getRoleMenuTree() { 
            this.axios.get(menu.roleMenuTree+this.id).then((res) => {
                if (res && res.data.data) {

　　　　　　　　　　　　//这个赋值代码非常重要，没有这段，左右移动数据时，不生效
　　　　　　　　　　　　res.data.data.forEach(()>{
　　　　　　　　　　　　　　item.menuId = 0;
　　　　　　　　　　　　})

                    this.rightTreeData = res.data.data;
                }
            })
        },



　　　　

　　　　　/**
         * 获取右侧数据 id集合
         * @param {*} list
         * @param {*} rightIds
         */
         getRightDataIds(list, rightIds) {
            for (let rightItem of list) {
                rightIds.push(rightItem.id);
                if (rightItem.children && rightItem.children.length) {
                    this.getRightDataIds(rightItem.children, rightIds);
                }
            }
            return rightIds;
        },

        /**
         * 过滤左侧数据
         */
        filterLeftData (list, rightIds, newList) {
            for (let leftItem of list) {
                if (rightIds.includes(leftItem.id)) {
                    if (leftItem.children && leftItem.children.length) {
                        let insetBool = false;
                        for (let child of leftItem.children) {
                            if (!rightIds.includes(child.id)) insetBool = true;
                        }
                        if (insetBool) {
                            let jsonItem = JSON.parse(JSON.stringify(leftItem));
                            jsonItem.children = [];
                            newList.push(jsonItem);
                            this.filterLeftData(leftItem.children, rightIds, jsonItem.children);
                        }
                    }
                } else {
                    let jsonItem = JSON.parse(JSON.stringify(leftItem));
                    jsonItem.children = [];
                    newList.push(jsonItem);
                }
            }
            return newList;
        },


    }
}
