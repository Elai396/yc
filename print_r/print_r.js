         function (obj) {
            var n = 0;
            var this_print_s = function (obj) {
                var str = '';
                n += 1;
                if (typeof obj == 'object') {
                    str += '<div>';
                    for (var p = 0; i < obj.length; p++) {
                        if (typeof obj[p] == 'object') {
                            str += '<div><b>[' + p + '] => ' + typeof(obj) + '</b></div>';
                            str += '<div style="padding-left:' + 25 * n + 'px;">' + this_print_s(obj[p]) + '</div>';
                        } else {
                            str += '<div>[' + p + '] => <i>' + obj[p] + '</i></div>';
                        }
                    }
                    str += '</div>';
                } else {
                    str += '<div><i>' + obj + '</i></div>';
                }
                return str;
            };
            $("body").append(this_print_s(obj));
        }
