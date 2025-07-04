import * as InitApi from '../api'

import type { TInitField, TInitMenu, TInitStatistics } from '../types'

import { defineStore } from 'pinia'

export const useInitStore = defineStore('init', () => {
  const requisites = ref<Array<TInitField>>([])
  const settings = ref<Array<TInitField>>([])
  const menu = ref<Array<TInitMenu>>([])
  const statistics = ref<Array<TInitStatistics>>([])
  const importedPageStatistics = ref<Array<TInitStatistics>>([])

  const getInitData = async () => {
    const res = await InitApi.getInitData()
    requisites.value = res.requisites
    settings.value = res.settings
    menu.value = res.menu
    statistics.value = res.statistics
    importedPageStatistics.value = res.importedPageStatistics
    return res
  }
  const settingsMap = computed(() => new Map(settings.value.map(obj => [obj.key, obj])))
  const requisitesMap = computed(() => new Map(requisites.value.map(obj => [obj.key, obj])))
  return {
    getInitData,
    settingsMap,
    requisitesMap,
    menu,
    statistics,
    importedPageStatistics,
    requisites,
    settings
  }
})
