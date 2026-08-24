const configAbility = {
  "fileName": "8015050_Monster_W5_AsatPramad_MainStory02Ability08",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Asat Pramad: 2}}"
      },
      "ability": "Monster_W5_AsatPramad_Ability08_Part01",
      "isTrigger": true
    },
    "Wait for Pending Ability Completions"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}