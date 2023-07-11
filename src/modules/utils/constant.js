export const constant = {
   SITE_NAME: '서울시 헬스케어',
   BOARD: {
      PAGE_SIZE: 10,
   },
   SEOUL_API_KEY: 'FJLJKNHST',
}

export default {
   constant,
   install: (app) => {
      app.config.globalProperties.$const = constant
   },
}
