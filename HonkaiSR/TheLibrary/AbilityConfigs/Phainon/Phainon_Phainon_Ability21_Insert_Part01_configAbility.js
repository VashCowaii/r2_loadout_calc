const configAbility = {
  "fileName": "Phainon_Phainon_Ability21_Insert_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Update Displayed Energy Bar",
      "priorState": "Custom1"
    },
    {
      "name": "UI Display Event",
      "popUpText": "Soulscorch Edict"
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Phainon_Ability21_Insert_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "onAbort": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "M_Phainon_Ability21_InsertCheck"
    }
  ],
  "references": []
}