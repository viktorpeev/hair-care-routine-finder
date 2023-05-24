export const useCalculation = (currentPage, itemsPerPage, likedItems, productRecommendation) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const likedItemIds = likedItems.map(item => item.id);
    const likedItemsPerPage = likedItems.filter(item => productRecommendation.find(product => product.id === item.id));
    const remainingItems = productRecommendation.filter(item => !likedItemIds.includes(item.id));
    const currentItems = [...likedItemsPerPage, ...remainingItems].slice(indexOfFirstItem, indexOfLastItem);

    const res={currentItems}

    return res;
}