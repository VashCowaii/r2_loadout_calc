const configAbility = {
  "fileName": "GlobalAbilitiesE_Monster_Standard_Suicide_StanceBreak",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "TriggerStanceCountDown_Monster"
    }
  ],
  "whenAdded": [],
  "references": []
}