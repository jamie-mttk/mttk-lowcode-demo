<script setup lang="ts">
import {  RouterView } from 'vue-router'
//1.Import
import { ref,  provide } from 'vue'
import { app,router } from './main'
import { createGlobalContext, createAppContext } from 'mttk-lowcode'
//2. Create global context
const globalContext = createGlobalContext(import.meta.env.VITE_APP_API_BASE, app,router)
provide('globalContext', globalContext)
//3.Create application context
const appContext = createAppContext(globalContext);
provide('appContext', appContext)
//
const appId=import.meta.env.VITE_APP_KEY
appContext.key.value=appId
//console.log('app key is set to :'+appId)

//
const menus = ref([])
//
appContext.loadDeployedMenus().then(function (response) {
  menus.value = response.list
});
//




</script>

<template>
  <el-container >
    <el-header style="padding:0px;height:auto;">
      <nav>
       {{ appContext.app.value.name }} 
        <el-menu  mode="horizontal" :router="true" active-text-color="#ffd04b" background-color="#545c64" text-color="#fff">
            <el-sub-menu v-for="menu in menus" :index="'/' + menu['_id']" :key="menu['_id']">
              <template #title>
                <el-icon>
                  <component :is="menu.icon||''"></component>
                </el-icon>
                <span>{{ menu.name }}</span>
              </template>
              <el-menu-item v-for="page in menu.pages || []" :index="'/deploy/'+appId+'/' + page['_id']" :key="page['_id']">
                <el-icon>
                  <component :is="page.icon||''"></component>
                </el-icon>
              {{
                page.name
              }}</el-menu-item>
            </el-sub-menu>
          </el-menu>
      
      </nav>
    </el-header>
    <el-main  style="padding:0px;padding:0px;">
      <RouterView />
    </el-main>
  </el-container>
</template>

<style scoped>

</style>
