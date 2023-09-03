import http from '@/utils/http';

//请求推荐图片
export async function getRecommendImgAPI(page,pageSize) {
 
    const response = await http({
      url: 'recImg',
      params: {rec_status:true,page:page,pageSize:pageSize}
    });
    return response; // 返回响应数据
}

//请求分类图片
export async function getSortImgAPI(sort,page,pageSize) {
    const response = await http({
      url: 'sortImg',
      params: {img_sort:sort,page:page,pageSize:pageSize}
    });

    return response; // 返回响应数据
}

//请求轮播图图片
export async function getSwiImgAPI(page,pageSize) {
 
    const response = await http({
      url: 'swiImg',
      params: {swi_status:true,page:page,pageSize:pageSize}
    });

    return response; // 返回响应数据
}

//注册
export async function registerAPI(info) {
 
    const response = await http({
      url: 'register',
      method:'post',
      params: {info}
    });

    return response; // 返回响应数据
   
}

//登录
export async function loginAPI(info) {

    const response = await http({
      url: 'login',
      method:'post',
      params: {info}
    });
    return response; // 返回响应数据
  
}

//渐变色数据
export async function colorAPI() {

  const response = await http({
    url: 'color',
    method:'get',
    params: {}
  });
  return response; // 返回响应数据

}

//收藏
export async function collectAPI(info) {
 
  const response = await http({
    url: 'collect',
    method:'post',
    params: {info}
  });

  return response; // 返回响应数据
 
}

//取消收藏
export async function cancelCollectAPI(user_id,img_id) {
 
  const response = await http({
    url: 'cancelCollect',
    method:'post',
    params: {user_id,img_id}
  });

  return response; // 返回响应数据
 
}

//验证是否收藏
export async function isCollectAPI(user_id,img_id) {
  const response = await http({
    url: 'iscollect',
    method:'get',
    params: {user_id,img_id}
  });

  return response; // 返回响应数据
 
}

//获取收藏图片
export async function getCollectImgAPI(user_id) {
 
  const response = await http({
    url: 'colImg',
    method:'get',
    params: {user_id}
  });

  return response; // 返回响应数据
 
}


//email
export async function getEmailAPI(mail) {

  const response = await http({
    url: 'getemail',
    method:'get',
    params: {mail}
  });

  return response; // 返回响应数据
 
}

//更新名字
export async function getChangeNameAPI(username,_id) {

  const response = await http({
    url: 'changeName',
    method:'post',
    params: {username,_id}
  });

  return response; // 返回响应数据
 
}


//鉴权登录
export async function getTokenAPI(config) {

  const response = await http({
    url: 'profile',
    method:'get',
    // 自定义请求头
    headers:{authorization:config.authorization}
  });

  return response; // 返回响应数据
 
}


//上传图片
export async function uploadImgAPI(formData) {

  const response = await http({
    url: 'upload',
    method:'post',
    // 请求体
   data:formData
  });

  return response; // 返回响应数据
 
}