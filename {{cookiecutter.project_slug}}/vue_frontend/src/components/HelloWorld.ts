import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',

  props: {
    formId: String
  },

  data (): any {
    const message = 'World'
    return { message }
  },

  methods: {
  }

  //   mounted (): any {

//   }
}
)
