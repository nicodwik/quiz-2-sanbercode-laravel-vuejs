new Vue({
    el: '#app',
    data: {
        users: [{
            'name': 'Muhammad Iqbal Mubarok'
        },{
            'name': 'Ruby Purwanti'
        }, {
            'name': 'Faqih Muhammad'
        }],
        value: '',
        button: '',
        user: {}
    },
    methods: {
        addUser: function() {
            this.user = {
                'name' : this.value
            }
            this.users.push(this.user)
            this.value = ''
        },
        editUser: function(index) {
            this.value = this.users[index].name
            document.getElementById('addButton').remove()
            var btn = document.createElement('button')
            btn.innerHTML = 'update'
            btn.setAttribute('v-on:click', 'updateUser(index)')
            document.getElementById('app').insertBefore(btn, document.getElementById('line'))
        },
        updateUser: function(index) {
            this.users[index].name = this.value
        },
        removeUser: function(index) {
            this.users.splice(index, 1)
        }
        
    }
})