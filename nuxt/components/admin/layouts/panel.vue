<template>
  <q-layout
    class="panel-layout"
    view="lHh Lpr lFf"
  >
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          outline
          icon="menu"
          aria-label="Меню"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Панель управления </q-toolbar-title>

        <q-btn
          outline
          flat
          dense
          round
          :loading="componentLoading"
          icon="logout"
          aria-label="Выход"
          @click="logoutAlert = true"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :width="300"
    >
      <q-list>
        <q-item-label header>
          Меню
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          @close-drawer="leftDrawerOpen = false"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <div class="pa-16">
        <slot />
      </div>
    </q-page-container>

    <q-dialog v-model="logoutAlert">
      <q-card>
        <q-card-section>
          <div class="text-h6">
            Вы уверены?
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Сессия будет удалена, придется снова вводить логин и пароль для входа.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            v-close-popup
            flat
            label="Закрыть"
            color="panel-primary"
          />

          <q-btn
            flat
            label="Выйти"
            color="negative"
            @click="logout"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script setup lang="ts">
import EssentialLink from '~/components/admin/widgets/EssentialLink.vue'
import { apiFetch } from '~/extensions/fetch'

definePageMeta({
  layout: 'panel'
})

const { notify } = useQuasar()
const router = useRouter()

const essentialLinks = [
  {
    title: 'Панель',
    caption: 'Главная страница',
    icon: 'mdi-home-outline',
    link: '/admin/'
  },
  {
    title: 'Меню',
    caption: 'Отредактируйте меню сайта',
    icon: 'mdi-layers-outline',
    link: '/admin/menuItems/'
  },
  {
    title: 'Страницы',
    caption: 'Создайте/отредактируйте страницы сайта',
    icon: 'mdi-layers-triple-outline',
    link: '/admin/pages/'
  },
  {
    title: 'Пользователи',
    caption: 'Создайте/отредактируйте пользователя для этой панели управления',
    icon: 'mdi-account-multiple-outline',
    link: '/admin/users/'
  },
  {
    title: 'Реквизиты',
    caption: 'Отредактируйте важные поля с данными о компании',
    icon: 'mdi-information-slab-circle-outline',
    link: '/admin/requisites/'
  },
  {
    title: 'Настройки',
    caption: 'Отредактируйте общие данные сайта',
    icon: 'mdi-cog-outline',
    link: '/admin/settings/'
  }
]

const leftDrawerOpen = ref(false)
const logoutAlert = ref(false)
const componentLoading = ref(false)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const logout = async () => {
  componentLoading.value = true

  await apiFetch('/api/user/logout', { method: 'delete' })
    .then((result: any) => {
      notify({
        color: 'positive',
        textColor: 'white',
        icon: 'done',
        message: result.message || 'Готово'
      })
      router.push('/admin/login')
    })
    .catch(err => {
      notify({
        color: 'negative',
        textColor: 'white',
        icon: 'warning',
        message: err.message || 'Упс, произошла ошибка'
      })
    })

  componentLoading.value = false
}
</script>

<style lang="scss">
.panel-layout {
  @import '~/components/admin/css/common.scss';
  @import '~/components/admin/css/panel.scss';

  .q-layout__section--marginal {
    background-color: $panel-primary;
  }
}
</style>
