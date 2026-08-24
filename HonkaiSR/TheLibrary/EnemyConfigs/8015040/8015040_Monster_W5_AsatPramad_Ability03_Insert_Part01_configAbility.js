const configAbility = {
  "fileName": "8015040_Monster_W5_AsatPramad_Ability03_Insert_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "ability": "Monster_W5_AsatPramad_Ability03_Insert_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-1545281796\">W5_AsatPramad_Part03PosResetAfterAbility</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}