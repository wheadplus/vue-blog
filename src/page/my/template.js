import blog from '@/api/blog.js'
import { mapGetters } from 'vuex'
export default {
    name: '',
    data () {
      return {
        blogs: [],
        page: 1,
        total: 0
      }
    },
    computed: {
      ...mapGetters(['user'])
    },
    methods: {
      onPageChange(newPage) {
        blog.getBlogsByUserId(this.user.id, { page: newPage }).then(res => {
          console.log(res)
          this.blogs = res.data
          this.total = res.total
          this.page = res.page
          this.$router.push({ path: `/my`, query: { page: newPage}})
        })
      },
      splitDate(dateStr){
        let dateObj = typeof dateStr === 'object' ? dateStr : new Date(dateStr)
        return {
          date: dateObj.getDate(),
          month: dateObj.getMonth() + 1,
          year: dateObj.getFullYear()
        }
      },
      async onDelete(blogId){
        await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        await blog.deleteBlog({ blogId })
        this.$message.success('删除成功')
        this.blogs = this.blogs.filter(blog => blog.id != blogId)
      }
    },
    created(){
      // this.$route.params.userId 
      this.page = this.$route.query.page || 1
      blog.getBlogsByUserId(this.user.id, { page:this.page }).then(res => { 
        console.log(res)
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
      }) 
    }
  }