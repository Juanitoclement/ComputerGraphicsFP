function createMatTex(scene){
  var materialTex = new BABYLON.StandardMaterial("materialTex", scene);
  materialTex.diffuseTexture = new BABYLON.Texture("ground.jpg", scene);
  materialTex.specularTexture = new BABYLON.Texture("house.jpg", scene);
  materialTex.specularPower = 25
  //mat.emissiveColor = new BABYLON.Color3(0.2, 0.2, 0.2);
  materialTex.ambientColor = new BABYLON.Color3(0.23,0.98,0.53);
  //transparency
  materialTex.alpha = 1;
  return materialTex;
}
