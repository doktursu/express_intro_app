function Orchid(name, img) {
    this.name = name;
    this.img = img;
    this.countries = [];
}

Orchid.prototype = {
    setName : function (name) {
        this.name = name;
    },

    setImg : function (img) {
        this.img = img;
    }
};

module.exports = Orchid;