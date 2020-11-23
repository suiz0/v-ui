const BaseMixin = {
    created() {
        this.$emit("created");
    },
    mounted()
    {
        this.$emit("mounted");
    }
};

export default BaseMixin;