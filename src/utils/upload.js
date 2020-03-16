
import { upload } from "@/api/common";
import { UPLOAD_DOMAIN } from "@/utils/const";
export async function uploadImg(file) {
    return new Promise((resolve, reject) => {
        let canvas = document.createElement('canvas')
        // 获取对应的CanvasRenderingContext2D对象(画笔)
        let context = canvas.getContext('2d')
        // 创建新的图片对象 
        let img = new Image()
        // 指定图片的DataURL(图片的base64编码数据)
        img.src = file.content
        // 监听浏览器加载图片完成，然后进行进行绘制
        img.onload = () => {
            // 指定canvas画布大小，该大小为最后生成图片的大小
            canvas.width = 400
            canvas.height = ((img.height*400)/img.width).toFixed(0)
            /* drawImage画布绘制的方法。(0,0)表示以Canvas画布左上角为起点，400，300是将图片按给定的像素进行缩小。
            如果不指定缩小的像素图片将以图片原始大小进行绘制，图片像素如果大于画布将会从左上角开始按画布大小部分绘制图片，最后的图片就是张局部图。*/
            context.drawImage(img, 0, 0, 400, ((img.height*400)/img.width).toFixed(0))
            // 将绘制完成的图片重新转化为base64编码，file.file.type为图片类型，0.92为默认压缩质量
            file.content = canvas.toDataURL(file.file.type, 0.92)
            // /\/(?:jpeg|png)/i.test(file.file.type)&&file.file.size>1500000
            // 最后将base64编码的图片保存到数组中，留待上传。
            var arr = file.content.split(","),
                bstr = atob(arr[1]),
                n = bstr.length,
                u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            let obj = new File([u8arr], file.file.name, {
                type: file.file.type
            });
            let params = new FormData(); //创建form对象
            params.append("file", obj); //通过append向form对象添加数据//第一个参数字符串可以填任意命名，第二个根据对象属性来找到file
            let config = {
                headers: { "Content-Type": "multipart/form-data" }
            };
            upload(
                params,
                config
            ).then(res => {

                let url = res.data;
                resolve(url);
            });
        }


    });
}