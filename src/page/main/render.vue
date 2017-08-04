
<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',

    }
  },
  mounted() {
    console.log(Symbol('123'))
  },
  render: function(createElement) {
    return createElement('div',
      Array.apply(null, {
        length: 20
      }).map(function() {
        return createElement('p', 'hi')
      })
    )
  },
  methods:{
    getsetTest(){
      function Person() {
          var age = new Date().getFullYear() - 18;
          Object.defineProperty(this, "age", {
              get: function () {
                  console.log("get")
                 return new Date().getFullYear() - age;
                },
              set: function (value) {
                  console.log("set")
                age = value;
              }
          });
      }
      var p = new Person();
      p.age = 1994;
      console.log(p.age)
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>

</style>
