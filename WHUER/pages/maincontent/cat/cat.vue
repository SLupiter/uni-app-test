<template>
	<view>
		<view class="header">
			<view class="input-view" fixed='true'>
				<uni-icon type="search" size="22" color="#666666"></uni-icon>
				<input confirm-type="search" @confirm="confirm" class="input" type="text" placeholder="输入搜索关键词" />
			</view>
			
			
			
		</view>
		<view class="">
		<view class="uni-card" v-for="(value,key) in listData" :key="key" @click="goDetail(value)">
			<view class="uni-card-header uni-card-media" >
				<image class="uni-card-media-logo" src="../../../static/home/c.png"></image>
				<view class="uni-card-media-body">
					<text class="uni-card-media-text-top">{{value.nickname}}</text>
					<text class="uni-card-media-text-bottom ">
					<text class="">{{value.title}}</text>
					<text class="uni-common-pl">{{value.created_at}}</text></text>
				</view>
			</view>
			<view class="uni-card-content image-view">
				<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" class="image"></image>
			</view>
			<view class="uni-card-footer">
			<!--	<view class="uni-card-link">Like</view>
				<view class="uni-card-link">Comment</view>
				<view class="uni-card-link">Read more</view>-->
				<view class="">{{value.content}}</view>
			</view>
		</view>
		</view>
		<!--
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in listData" :key="key" @click="goDetail(value)">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" src="http://placehold.it/150x150"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{value.title}}
						<text>{{value.location}}</text></view>
						<view class="uni-media-list-text-bottom">
							
							<text>{{value.content}}</text>
						</view>
					</view>
				</view>
			</view>
		</view> -->
		
		
		
		
		
		
		
		
		
		
		
		
		<uni-drawer :visible="rightDrawerVisible" mode="right" @close="closeRightDrawer">
			
			<view class="uni-padding-wrap">
				<form @submit="formSubmit" @reset="formReset">
					
					<view>
						<view class="uni-title">地点</view>
						<radio-group class="uni-column" name="location">
							<view class="uni-flex">
							<label>
								<radio value="1" />信部</label>
							<label>
								<radio value="2" />文理学部</label></view>
							
					<!--	</radio-group>
						<radio-group class="uni-flex" name="loves"> -->
							<view class=" uni-flex">
							<label>
								<radio value="3" />工部</label>
							<label>
								<radio value="4" />医学部</label>	</view>	
						</radio-group>
					</view>
					
					<view class="uni-btn-v uni-common-mt">
						<button class="btn-submit " size="mini" formType="submit" type="primary" @tap="closeRightDrawer">Submit</button>
					
					</view>
					<view class="uni-btn-v uni-common-mt">
						<button  type="warn" size="mini" formType="reset">Reset</button>
					</view>
				</form>
			</view>
		</uni-drawer>
		
	</view>
</template>
<script>
	import uniDrawer from '../../../components/uni-drawer.vue';
	import uniIcon from '../../../components/uni-icon.vue';
	export default {
		components: {
			uniDrawer,
			uniIcon
		},
		data() {
			return {
				rightDrawerVisible: false,
				listData: [],
				nextPage:"",
				page: 1,
				reLoad:true,
				searchData:{},
				getting:false
			}
		},
		methods: {
			formSubmit: function (e){
				this.reLoad = true;
				var formData = e.detail.value;
				
					for (var val in formData){
						//耗时一个下午的重大发现，数组与json用法的区别，如何遍历两者，如何在
						//vue中动态添加遍历并添加json数据
						this.$set(this.searchData,val,formData[val]);
					}
				console.log(e);
				
				
				this.getList();
				
				
			},
			formReset: function (e) {
				console.log("清空数据")
				this.chosen = ''
			},
			closeRightDrawer() {
				this.chosen='';
				this.rightDrawerVisible = false;
				
			},
			getList() {
				//防止多次点击getList
				if(this.getting){
					return;
				}
				this.getting=true;
				
			
				let url= 'https://api.thinker.ink/v1/animals/';
				if (!this.reLoad){
					
					url=this.nextPage; 
					if(!url){
						uni.showToast({
							icon:'none',
							title: '无更多数据',
							mask: false,
							duration: 1500
						});
						return;
					}
				}
				
				console.log(url);
				uni.showLoading({
					title: '正在获取数据',
					mask: false
				});
				uni.request({
					url: url,
					method: 'GET',
					data: this.searchData,
					success: res => {
						uni.hideLoading();
						console.log(res.data.count);
						if (res.data.count==0){
							uni.showToast({
								
								title: '没有数据',
								mask: false,
								duration: 1500
							});
						}
						console.log(res);
						if (!this.reLoad) {
							res.data.data.forEach((news) => {
								this.listData= this.listData.concat(res.data.data);
								console.log(this.listData);
								
							});
						}else{
						this.listData= res.data.data;
						}
						this.nextPage=res.data.next;
						this.reLoad=false;
						console.log(this.nextPage);
						//console.log(this.listData[0].images[0]);
					},
					fail: () => {},
					complete: () => {}
				});
				this.getting=false;
				
				this.searchData={};
			},
			
			confirm: function (e) {
					this.reLoad = true;
					this.searchData.search = e.detail.value;
			        console.log(this.searchData);
				
				this.getList();
				
			}
		},
		onNavigationBarButtonTap(e) {
			console.log("tab顶部键"+e.index);
			switch (e.index){
				
				case 1:
					console.log("点了评分");
					this.searchData.ordering="rating";
					this.getList();
					break;
				case 0:
				this.rightDrawerVisible = !this.rightDrawerVisible;
					break;
				default:
					break;
			}
			
		},
		onBackPress() {
			// 返回按钮监听
			if (this.rightDrawerVisible) {
				this.rightDrawerVisible = false;
				return true;
			}
		},
		onLoad() {
			this.getList();
		},
		onReachBottom() {
			this.reLoad=false;
			this.getList();
			console.log('bottom');
		},
		onPullDownRefresh() {
			this.reLoad=true;
			this.getList();
			uni.stopPullDownRefresh();
		}
	}
</script>

<style>
	.uni-card{
		margin-top:50upx;
	}
	
	.page {
	    padding-top: 60upx; background: #efeff4;
	}
	
	.image-view {
	    height: 480upx;
	    overflow: hidden;
	}
	
	.image {
	    width: 100%;
	}
	.header {
		display: flex;
		flex-direction: row;
		padding: 10px 15px;
		align-items: center;
	}

	.input-view {
		display: flex;
		align-items: center;
		flex-direction: row;
		background-color: #e7e7e7;
		height: 30px;
		border-radius: 15px;
		padding: 0 10px;
		flex: 1;
	}

	.input {
		flex: 1;
		padding: 0 5px;
		height: 24px;
		line-height: 24px;
		font-size: 16px;
	}

	.icon {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-left: 10px;
	}
	.little {
		width:20upx;
	}
</style>
