import formatDate from "./date-format";

export default function() {
	var result = [];
    for (var i=6; i>=0; i--) {
        var d = new Date();
        d.setDate(d.getDate() - i);
        result.push( formatDate(d) );
    }
    return result;
}