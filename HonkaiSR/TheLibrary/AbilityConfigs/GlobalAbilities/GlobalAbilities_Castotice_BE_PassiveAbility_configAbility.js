const configAbility = {
  "fileName": "GlobalAbilities_Castotice_BE_PassiveAbility",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "GlobalAbility_Castorice_Main"
    }
  ],
  "references": []
}