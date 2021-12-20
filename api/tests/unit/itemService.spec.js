const { updateItem } = require('../../src/services/itemService');
const itemRepository = require('../../src/dal/itemRepository');

test('Item status mapping', async () => {
    const updateItemSpy = jest.spyOn(itemRepository, 'updateItem').mockImplementation();
    await updateItem('name', 'description', 'capital', 'dateStart', 'Approved', 'dateFinish');
    expect(updateItemSpy).toHaveBeenCalledWith('name', 'description', 'capital', 'dateStart', 7, 'dateFinish')
});
