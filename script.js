function count() {
    var inputStr = document.getElementById("inputStr").value.toUpperCase();
    var counts = {};
    var countx = 0;
    for (var i = 0; i < inputStr.length; i++) {
      var char = inputStr.charAt(i);
      if (char.match(/[a-zA-Z]/)) {
        countx++;
        counts[char] = counts[char] ? counts[char] + 1 : 1;
      }
    }
    var result = `
        <h4>Tổng số chữ cái: ${countx}</h4>
    <tr><th>Kí tự</th><th>Đếm</th></tr>
    `;
    for (var char in counts) {
      result += `<tr>
                    <td>${char}</td>
                    <td>${counts[char]}</td> 
                </td>`;
    }
    document.getElementById("result").innerHTML = result;
  }