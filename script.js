// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // ======================= WINE DATA OBJECT =======================
    // Storing all wine information in a single object for easy access.
    const wineData = {
        solarice: {
            name: "Solaris Ice Wine",
            image: "images/solarice-ice-wine.jpg",
            story: "Harvested under the glow of the winter moon, Solaris Ice Wine is a rare treasure. The grapes are left to freeze naturally on the vine, concentrating their sugars and flavors into a sweet, complex nectar that captures the crisp magic of the first frost.",
            tastingNotes: ["Honeyed Apricot", "Tropical Lychee", "Candied Ginger", "Zesty Citrus Peel"],
            specifications: {
                grape: "Vidal Blanc",
                region: "Niagara Peninsula",
                abv: "11.5%",
                temp: "8-10°C"
            },
            foodPairings: ["Foie Gras", "Blue Cheese", "Fruit Tarts", "Spicy Asian Cuisine"]
        },
        midnight: {
            name: "Midnight Merlot",
            image: "images/midnight-merlot.jpg",
            story: "As deep and comforting as a star-filled night sky, our Midnight Merlot is aged in French oak barrels. It’s a smooth, velvety wine with a character that is both bold and mysteriously alluring, perfect for contemplative evenings.",
            tastingNotes: ["Black Cherry", "Ripe Plum", "Toasted Oak", "Hint of Vanilla"],
            specifications: {
                grape: "Merlot",
                region: "Napa Valley",
                abv: "14.2%",
                temp: "16-18°C"
            },
            foodPairings: ["Roasted Lamb", "Mushroom Risotto", "Aged Cheddar", "Dark Chocolate"]
        },
        golden: {
            name: "Golden Riesling",
            image: "images/golden-riesling.jpg",
            story: "Like liquid sunshine captured in a bottle, the Golden Riesling is refreshingly bright and crisp. It tells the story of long summer days in our sun-drenched vineyards, offering a perfect balance of sweetness and acidity.",
            tastingNotes: ["Green Apple", "White Peach", "Honeysuckle", "Slate Minerality"],
            specifications: {
                grape: "Riesling",
                region: "Mosel, Germany",
                abv: "12.0%",
                temp: "10-12°C"
            },
            foodPairings: ["Spicy Thai Curry", "Sushi and Sashimi", "Pork Schnitzel", "Goat Cheese"]
        },
        crimson: {
            name: "Crimson Cabernet",
            image: "images/crimson-cabernet.jpg",
            story: "This is a wine of passion and structure. The Crimson Cabernet is a full-bodied classic, with robust tannins and a complex profile that speaks of its rich terroir. It’s a confident, powerful wine meant to be shared over a hearty meal.",
            tastingNotes: ["Blackcurrant", "Dark Chocolate", "Cedar", "Subtle Tobacco"],
            specifications: {
                grape: "Cabernet Sauvignon",
                region: "Bordeaux, France",
                abv: "14.5%",
                temp: "17-19°C"
            },
            foodPairings: ["Grilled Steak", "Beef Bourguignon", "Hard Cheeses", "Venison"]
        },
        aurora: {
            name: "Aurora Rosé",
            image: "images/aurora-rose.jpg",
            story: "Inspired by the delicate colors of a summer dawn, Aurora Rosé is elegant and vibrant. It’s a crisp, dry rosé that dances on the palate, perfect for warm afternoons and cheerful gatherings with friends.",
            tastingNotes: ["Fresh Strawberry", "Watermelon", "Rose Petal", "Citrus Zest"],
            specifications: {
                grape: "Grenache",
                region: "Provence, France",
                abv: "13.0%",
                temp: "8-10°C"
            },
            foodPairings: ["Grilled Salmon", "Summer Salads", "Goat Cheese Bruschetta", "Seafood Paella"]
        },
        starfall: {
            name: "Starfall Chardonnay",
            image: "images/starfall-chardonnay.jpg",
            story: "Named for the clear, starry nights over our coastal vineyards, this Chardonnay is both creamy and bright. A gentle aging process in oak imparts a subtle richness that complements its crisp, fruit-forward character.",
            tastingNotes: ["Baked Apple", "Lemon Curd", "Toasted Almond", "Touch of Butterscotch"],
            specifications: {
                grape: "Chardonnay",
                region: "Sonoma Coast",
                abv: "13.8%",
                temp: "12-14°C"
            },
            foodPairings: ["Roast Chicken", "Lobster with Butter", "Creamy Pasta", "Mild Cheeses"]
        }
    };

    // ======================= MODAL FUNCTIONALITY =======================
    const modal = document.getElementById('wine-modal');
    const modalBody = modal.querySelector('.modal-body');
    const closeButton = modal.querySelector('.close-button');
    const wineCards = document.querySelectorAll('.wine-card');

    wineCards.forEach(card => {
        card.addEventListener('click', () => {
            const wineId = card.dataset.wine;
            const wine = wineData[wineId];
            
            // Generate the HTML content for the modal
            modalBody.innerHTML = `
                <img src="${wine.image}" alt="${wine.name}" style="width:100%; height: 300px; object-fit: cover; border-radius: 5px;">
                <h2 style="text-align:left; margin-top: 20px;">${wine.name}</h2>
                
                <h3>The Story</h3>
                <p>${wine.story}</p>
                
                <h3>Tasting Notes</h3>
                <ul>
                    ${wine.tastingNotes.map(note => `<li>${note}</li>`).join('')}
                </ul>

                <h3>Specifications</h3>
                <table style="width:100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Grape Varietal</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">${wine.specifications.grape}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Region</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">${wine.specifications.region}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">ABV</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">${wine.specifications.abv}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Serving Temp.</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">${wine.specifications.temp}</td>
                    </tr>
                </table>

                <h3>Food Pairings</h3>
                 <ul>
                    ${wine.foodPairings.map(pairing => `<li>${pairing}</li>`).join('')}
                </ul>
            `;

            // Display the modal
            modal.style.display = 'block';
        });
    });

    // Function to close the modal
    const closeModal = () => {
        modal.style.display = 'none';
        modalBody.innerHTML = ''; // Clear the content
    };

    // Event listeners to close the modal
    closeButton.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });

    // ======================= FOOD PAIRING HIGHLIGHT =======================
    const foodCategories = document.querySelectorAll('.food-category');
    const pairingsContainer = document.querySelector('.pairings-container');

    const pairingMap = {
        'seafood': ['starfall', 'aurora'],
        'cheese': ['midnight', 'starfall'],
        'red-meat': ['crimson', 'midnight'],
        'spicy': ['golden', 'solarice'],
        'dessert': ['solarice']
    };

    foodCategories.forEach(category => {
        category.addEventListener('mouseover', () => {
            // First, remove highlight from all cards
            wineCards.forEach(card => card.classList.remove('highlight'));
            
            // Get the wines to highlight
            const categoryId = category.dataset.pairings;
            const winesToHighlight = pairingMap[categoryId];
            
            // Add highlight to the corresponding cards
            winesToHighlight.forEach(wineId => {
                const cardToHighlight = document.querySelector(`.wine-card[data-wine="${wineId}"]`);
                if (cardToHighlight) {
                    cardToHighlight.classList.add('highlight');
                }
            });
        });
    });

    // Remove highlights when the mouse leaves the whole pairing area
    pairingsContainer.addEventListener('mouseleave', () => {
         wineCards.forEach(card => card.classList.remove('highlight'));
    });
});
