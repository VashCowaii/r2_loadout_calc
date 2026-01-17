const configAbility = {
  "fileName": "GlobalAbilities_GlobalAbility_Castorice_Main",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "modifier": "GlobalAbility_Castorice_CreateBattleEvent"
    }
  ],
  "references": []
}