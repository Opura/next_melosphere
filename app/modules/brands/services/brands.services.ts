import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
    url: "http://melospheredb.local",
    consumerKey: "ck_6928223622a4ec28795f1dbfa68a1c044e303ae6",
    consumerSecret: "cs_e25d31b1483ed4c200abb0151770f1aa1f12e688",
    version: "wc/v3"
});

export const getBrands = async () => {
    try {
        const response = await api.get("products/brands", { per_page: 40});
        return response.data;
    } catch (error) {
        throw error;
    }
};