window.onload = function()
{let market_colony = document.getElementById('market')

    let count = 0;
for (let shopid in market)
{
    count++;
    let shopdata = market[shopid]

    let shop = document.createElement('div')
    shop.className =
        'trade-card glass rounded-[2rem] p-8 transition-all duration-500'

    shop.innerHTML = `
        <h3 class="text-3xl font-black mb-3 text-lime-300">
            ${shopdata.name}
        </h3>

        <p class="text-white/50 mb-6">
            ${shopdata.description}
        </p>
    `

    let shopitems = document.createElement('div')
    shopitems.className = 'space-y-3'

    if (shopdata.status === 'closed')
    {
        shopitems.innerHTML = `
            <div class="bg-red-500/20 border border-red-500/40 rounded-xl p-4 text-center">
                <span class="text-red-300 font-bold">
                    🔒 SHOP CLOSED
                </span>
            </div>
        `
    }
    else
    {
        shopdata.items.forEach(itemData =>
        {
            let item = document.createElement('div')

            item.className =
                'flex justify-between items-center bg-black/20 rounded-xl p-4 border border-white/10'

            item.innerHTML = `
                <span class="font-bold text-white">
                    ${itemData.name}
                </span>

                <span class="text-lime-300 font-black">
                    $${itemData.price}
                </span>
            `

            shopitems.appendChild(item)
        })
    }

    shop.appendChild(shopitems)
    market_colony.appendChild(shop)
}

if(count == 0) alert('no Shops')

}