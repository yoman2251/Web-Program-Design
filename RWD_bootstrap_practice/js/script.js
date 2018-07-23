function resizeImage()
{
var window_height = document.body.clientHeight
var window_width = document.body.clientWidth
var image_width = document.images[0].width
var image_height = document.images[0].height
var height_ratio = image_height / window_height
var width_ratio = image_width / window_width
if (height_ratio > width_ratio)
{
document.images[0].style.width = "auto"
document.images[0].style.height = "100%"
}
else
{
document.images[0].style.width = "100%"
document.images[0].style.height = "auto"
}
}