
<template>
<div>
    <h3 class="sizeTitle">MODA Size Chart</h3>
<table class="sizeChart" border="0" cellpadding="10" cellspacing="0" width="100%">
<thead>
<tr>
<td>General Size</td>
<td>US</td>
<td>FR</td>
<td>IT</td>
<td>AU</td>
</tr>
</thead>
<tbody>
<tr>
<td>XS</td>
<td>34</td>
<td>44</td>
<td>44</td>
<td>34</td>
</tr>
<tr>
<td>S</td>
<td>36</td>
<td>46</td>
<td>46</td>
<td>36</td>
</tr>
<tr>
<td>M</td>
<td>38</td>
<td>48</td>
<td>48</td>
<td>38</td>
</tr>
<tr>
<td>L</td>
<td>40</td>
<td>50</td>
<td>50</td>
<td>40</td>
</tr>
<tr>
<td>XL</td>
<td>42</td>
<td>52</td>
<td>52</td>
<td>42</td>
</tr>
</tbody>
</table>
  </div>
</template>

<script>
export default {
  name: "SizeChart"
};
</script>


<style scoped>

.sizeTitle {
    padding: 10px;
}
.sizeChart {
    font-size: 13px;
    padding: 0 10px;
}
body {
  text-align: center;
  padding: 100px 10% 0;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 11px;
}

thead tr {
background: #f68526;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  
}

tr td {
  border-bottom: 1px solid #eee;
}
</style>