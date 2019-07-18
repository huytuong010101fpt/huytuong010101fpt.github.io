new Vue({
	el : "#app",
	data : {
		isStart: false,
		HP1: 100,
		HP2: 100,
		logs: []
	},
	methods : {
		start: function(){
			this.HP1 = 100;
			this.HP2 = 100;
			this.isStart = true;
			this.logs = [];
		},
		stop: function(){
			alert('Bạn đã chấp nhân thua. Chơi ván nửa nhé');
			this.isStart = false;
		},
		kill: function(){
			damage = this.ran(10,20);
			this.HP2 = this.HP2 - damage;
			if(this.HP2 < 0) this.HP2 = 0;
			this.logs.unshift({
				isNguoi: true,
				satThuong: "Bạn đã đánh đối thủ " + damage + " sát thương"
			})
			damage = this.ran(10,18);
			this.HP1 = this.HP1 - damage;
			if(this.HP1 < 0) this.HP1 = 0;
			this.logs.unshift({
				isNguoi: false,
				satThuong: "Bạn đã bị đánh " + damage + " sát thương"
			})
			this.check();
		},
		sKill: function(){
			damage = this.ran(15,25);
			this.HP2 = this.HP2 - damage;
			if(this.HP2 < 0) this.HP2 = 0;
			this.logs.unshift({
				isNguoi: true,
				satThuong: "Bạn đã đánh đối thủ " + damage + " sát thương"
			})
			damage = this.ran(15,23);
			this.HP1 = this.HP1 - damage;
			if(this.HP1 < 0) this.HP1 = 0;
			this.logs.unshift({
				isNguoi: false,
				satThuong: "Bạn đã bị đánh " + damage + " sát thương"
			})
			this.check();
		},
		heal: function(){
			if (this.HP1 < 70){
				mau = this.ran(15,25);
				this.HP1 = this.HP1 + mau;	
				this.logs.unshift({
					isNguoi: true,
					satThuong: "Bạn được hồi " + mau + " % máu"
				})
			} else {
				this.logs.unshift({
					isNguoi: true,
					satThuong: "Bạn chưa thể hồi máu"
				})
			}
			if (this.HP2 < 70){
				mau = this.ran(15,23);
				this.HP2 = this.HP2 + mau;	
				this.logs.unshift({
					isNguoi: false,
					satThuong: "Đối thủ hồi " + mau + " % máu"
				})
			}
		},
		ran: function(min,max){
			return Math.floor(Math.random() * (max - min + 1)) + min;
		},
		check: function(){
			if(this.HP1 == 0){
				alert("Rất tiếc bạn đã thua!");
				this.HP1 = 100;
				this.HP2 = 100;
				this.isStart = false;

			}
			else if(this.HP2 == 0){
				alert("Chúc mừng bạn đã thắng!");
				this.HP1 = 100;
				this.HP2 = 100;
				this.isStart = false;

			};

		}
	},
	watch: {

	}
})