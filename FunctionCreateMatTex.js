function createMatTex(scene){
  var materialTex = new BABYLON.StandardMaterial("materialTex", scene);
  materialTex.diffuseTexture = new BABYLON.Texture("https://st.depositphotos.com/1008280/4016/i/950/depositphotos_40161041-stock-photo-soil-texture.jpg", scene);
  materialTex.specularTexture = new BABYLON.Texture("http://4.bp.blogspot.com/-Yeqq4bqD-oA/Uk2_sNpG-cI/AAAAAAAAaa8/W4oViksGCKE/s1600/wing-cap-mario.png", scene);
  materialTex.specularPower = 25
  //mat.emissiveColor = new BABYLON.Color3(0.2, 0.2, 0.2);
  materialTex.ambientColor = new BABYLON.Color3(0.23,0.98,0.53);
  //transparency
  materialTex.alpha = 1;
  return materialTex;
}
