import 'regenerator-runtime/runtime';
import itemService from '../../src/services/itemService';
import itemRepository from '../../src/dal/itemRepository';

test('Item status mapping', async () => {
    const updateItemSpy = jest.spyOn(itemRepository, 'updateItem').mockImplementation();
    await itemService.updateItem('name', 'description', 'capital', 'dateStart', 'Approved', 'dateFinish');
    expect(updateItemSpy).toHaveBeenCalledWith('name', 'description', 'capital', 'dateStart', 7, 'dateFinish')
});
