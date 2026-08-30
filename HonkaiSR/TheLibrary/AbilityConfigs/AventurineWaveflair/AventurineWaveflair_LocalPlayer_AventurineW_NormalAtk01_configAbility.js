const configAbility = {
  "fileName": "AventurineWaveflair_LocalPlayer_AventurineW_NormalAtk01",
  "skillTrigger": "NormalAtk",
  "abilityType": "Basic ATK",
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": "Ability Has a Target",
      "passed": [
        "Deleted bullshit",
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "Overworld Attack Instance"
            }
          ],
          "projectileFinished": [
            {
              "name": "Overworld Attack Instance"
            }
          ]
        }
      ],
      "failed": [
        "Deleted bullshit",
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "Overworld Attack Instance"
            }
          ],
          "projectileFinished": [
            {
              "name": "Overworld Attack Instance"
            }
          ]
        }
      ]
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Skill Point User(Or NONE)"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  }
}