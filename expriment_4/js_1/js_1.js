// JavaScript Document
	<script type="text/javascript">
		document.write('<table>');
		for(var i=1;i<=9;i++){
			document.write('<tr>')
			for(var l=1;l<=i;l++)
				{
					document.write('<td>');
					document.write(l+'*'+i+'='+i*l);
					document.write('<td>');
				}
			document.write('<tr>');
		}
		document.write('<table>');
	</script>