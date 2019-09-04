import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    var sortie=[];

    if(!items)
      sortie=[];
    else if(!searchText)
      sortie=items;
    else{
      searchText = searchText.toLowerCase();
      console.log("searchText"+searchText);

      sortie=items.filter( it => {
        console.log('nomUtilisateur: ', it.nomUtilisateur.toLocaleLowerCase().indexOf(searchText));
        return  it.nomUtilisateur.toLocaleLowerCase().indexOf(searchText) !== -1;
      });
    }

    return sortie;
  }

}
