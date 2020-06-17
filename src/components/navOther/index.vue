<template>
  <div>
    <ProductList></ProductList>
    <ProductList></ProductList>
    <ProductList></ProductList>
    <ProductList></ProductList>
    <ProductList></ProductList>
  </div>
</template>

<script type="text/ecmascript-6">
import ProductList from "../../components/productList/index";
export default {
  name: "navOther",
  data() {
    return {};
  },
  components: {
    ProductList
  }
};
</script>

<style lang='less' scoped>
</style>