const $counter = counter({value: 0})

$counter.value++
$counter.value++
$counter.value--
$counter.value++

document.body.appendChild($counter)
